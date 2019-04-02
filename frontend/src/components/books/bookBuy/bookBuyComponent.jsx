// Takes book title
// uses book util to generate a url
// renders a link to that book

import React from 'react'
import amazonLink from '../../../util/amazonBookApiUtil';

export default function bookBuyComponent(bookTitle, bookAuthor) {
  return (
    <a href={amazonLink(bookTitle, bookAuthor)} target="_blank" >Buy now</a>
  )
}