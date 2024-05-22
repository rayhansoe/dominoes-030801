export const source = [
  {
    id: 0,
    arr: [1, 4]
  },
  // {
  //   id: 1,
  //   arr: [2, 1]
  // },
  {
    id: 2,
    arr: [1, 6]
  },
  {
    id: 3,
    arr: [1, 1]
  },
  // {
  //   id: 4,
  //   arr: [3, 2]
  // },
  // {
  //   id: 5,
  //   arr: [6, 5]
  // },
  {
    id: 6,
    arr: [2, 2]
  },
  {
    id: 7,
    arr: [6, 2]
  },
  // {
  //   id: 8,
  //   arr: [1, 3]
  // },
  {
    id: 9,
    arr: [2, 3]
  },
  // {
  //   id: 10,
  //   arr: [4, 6]
  // },
  {
    id: 11,
    arr: [2, 5]
  },
  // {
  //   id: 12,
  //   arr: [2, 4]
  // },
  {
    id: 13,
    arr: [6, 4]
  },
  {
    id: 14,
    arr: [3, 1]
  },
  // {
  //   id: 15,
  //   arr: [3, 3]
  // },
  {
    id: 16,
    arr: [1, 5]
  },
  {
    id: 17,
    arr: [3, 4]
  },
  {
    id: 18,
    arr: [5, 6]
  },
  {
    id: 19,
    arr: [2, 6]
  },
  // {
  //   id: 20,
  //   arr: [3, 6]
  // },
  // {
  //   id: 21,
  //   arr: [5, 4]
  // },
  {
    id: 22,
    arr: [6, 1]
  },
  {
    id: 23,
    arr: [1, 2]
  },
  {
    id: 24,
    arr: [4, 1]
  },
  {
    id: 25,
    arr: [6, 6]
  },
  {
    id: 26,
    arr: [6, 3]
  },
  {
    id: 27,
    arr: [4, 2]
  },
  // {
  //   id: 28,
  //   arr: [5, 5]
  // },
  // {
  //   id: 29,
  //   arr: [4, 3]
  // },
  {
    id: 30,
    arr: [4, 5]
  },
  {
    id: 31,
    arr: [3, 5]
  },
  {
    id: 32,
    arr: [4, 4]
  },
  // {
  //   id: 34,
  //   arr: [5, 1]
  // },
  {
    id: 35,
    arr: [5, 2]
  },
  {
    id: 36,
    arr: [5, 3]
  },
]

export const fullDeck = [
  {
    id: 0,
    arr: [1, 4]
  },
  {
    id: 1,
    arr: [2, 1]
  },
  {
    id: 2,
    arr: [1, 6]
  },
  {
    id: 3,
    arr: [1, 1]
  },
  {
    id: 4,
    arr: [3, 2]
  },
  {
    id: 5,
    arr: [6, 5]
  },
  {
    id: 6,
    arr: [2, 2]
  },
  {
    id: 7,
    arr: [6, 2]
  },
  {
    id: 8,
    arr: [1, 3]
  },
  {
    id: 9,
    arr: [2, 3]
  },
  {
    id: 10,
    arr: [4, 6]
  },
  {
    id: 11,
    arr: [2, 5]
  },
  {
    id: 12,
    arr: [2, 4]
  },
  {
    id: 13,
    arr: [6, 4]
  },
  {
    id: 14,
    arr: [3, 1]
  },
  {
    id: 15,
    arr: [3, 3]
  },
  {
    id: 16,
    arr: [1, 5]
  },
  {
    id: 17,
    arr: [3, 4]
  },
  {
    id: 18,
    arr: [5, 6]
  },
  {
    id: 19,
    arr: [2, 6]
  },
  {
    id: 20,
    arr: [3, 6]
  },
  {
    id: 21,
    arr: [5, 4]
  },
  {
    id: 22,
    arr: [6, 1]
  },
  {
    id: 23,
    arr: [1, 2]
  },
  {
    id: 24,
    arr: [4, 1]
  },
  {
    id: 25,
    arr: [6, 6]
  },
  {
    id: 26,
    arr: [6, 3]
  },
  {
    id: 27,
    arr: [4, 2]
  },
  {
    id: 28,
    arr: [5, 5]
  },
  {
    id: 29,
    arr: [4, 3]
  },
  {
    id: 30,
    arr: [4, 5]
  },
  {
    id: 31,
    arr: [3, 5]
  },
  {
    id: 32,
    arr: [4, 4]
  },
  {
    id: 34,
    arr: [5, 1]
  },
  {
    id: 35,
    arr: [5, 2]
  },
  {
    id: 36,
    arr: [5, 3]
  },
]

Object.freeze(source)

export const asc = (dominoes) => {
  let sumDominoes = dominoes.map(domino => domino[0] + domino[1])
};

export const countDoubleNumber = (dominoes) => {
  return dominoes.filter(domino => domino.arr[0] === domino.arr[1]).length
};

export const flip = (dominoes) => {
  const next = [...dominoes]
  return [...next.map(d => {
    const fliped = [...d.arr]
    return {...d, arr: fliped.reverse()}
  })]
}

export const removeDupe = (dominoes) => {
  const uniqueStr = []

  dominoes.forEach(element => {
    const reversedEl = [...element]
    reversedEl.reverse()
    if (!uniqueStr.includes(element.toString()) && !uniqueStr.includes(reversedEl.toString())) {
      uniqueStr.push(element.toString())
    }
  });

  const unique = uniqueStr.map(el => el.split(',').map(d => +d))
  return unique
}
