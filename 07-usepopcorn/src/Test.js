import { useState } from "react";
import StarRating from "./StarRating";
export default function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        color="blue"
        size={24}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        onSetRating={setRating}
      />
      <p>Rating: {rating}</p>
    </div>
  );
}
