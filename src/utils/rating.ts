export const calcRating = (rating: number) => rating > 5
    ? Math.round(rating / 2 * 10) / 10
    : rating
