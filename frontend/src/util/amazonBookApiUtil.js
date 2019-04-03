const amazonLink = (title, author) => {
    let combined = title + "+" + author;
    return `https://www.amazon.com/s?k=${combined}`;
};

export default amazonLink;