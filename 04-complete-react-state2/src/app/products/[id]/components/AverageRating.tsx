"use client";
import { Review } from "@/api/types";
import { useReviews } from "@/app/components/ReviewsContext";

export default function AverageRating() {
  const [reviews] = useReviews()
  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  );
}
