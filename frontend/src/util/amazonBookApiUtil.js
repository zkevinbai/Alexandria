const amazonLink = (title) => {
    let newTitle = title.split(" ").join("+");
    return `https://www.amazon.com/s?k=${newTitle}`;
};

export default amazonLink;