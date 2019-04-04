export const isStaffBook = (bookTitle) => {
    
    let staffTitles = [
        "Don Quixote",
        "One Hundred Years of Solitude",
        "Hard-Boiled Wonderland and the End of the World",
        "Candide",
        "Cat's Cradle",
        "The Sound and the Fury",
        "Dawn",
        "Foundation",
        "The Brothers Karamazov",
        "A Game of Thrones",
    ];

    return staffTitles.includes(bookTitle);
}