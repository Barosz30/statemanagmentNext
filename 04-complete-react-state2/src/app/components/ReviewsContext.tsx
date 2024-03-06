"use client";

import { Review } from "@/api/types";
import React, { createContext, useState } from "react";


const useReviewsState = (initialReviews: Review[]) =>
    useState<Review[]>(initialReviews);

export const ReviewsContext = createContext<ReturnType<
    typeof useReviewsState
> | null>(null)

export const useReviews = () => {
    const reviews = React.useContext(ReviewsContext);
    if (!reviews) {
        throw new Error("ueReview must be used within a ReviewProvider")
    }
    return reviews;
}

const ReviewsProvider = ({
    reviews: initialReviews,
    children,
}: {
    reviews: Review[];
    children: React.ReactNode;
}) => {
    const [reviews, setReviews] = useReviewsState(initialReviews);

    return (
        <ReviewsContext.Provider value={[reviews, setReviews]}>
            {children}
        </ReviewsContext.Provider>
    )
}

export default ReviewsProvider;