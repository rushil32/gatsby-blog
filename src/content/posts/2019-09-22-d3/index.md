---
title: D3 Basics
date: 2019-09-22
path: /blog/d3-basics
author: "Rushil Saraogi"
category: "JS"
---

## Enter and Exit

When data is bound to a selection, each element in the data array is paired with the corresponding node in the selection. If there are fewer nodes than data, the extra data elements form the enter selection, which you can instantiate by appending to the enter selection. For example:

```javascript
d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter()
  .append("p")
  .text(function(d) {
    return "I’m number " + d + "!"
  })
```

--split--

## Domain and range

Domain - is the set of possible input values, while the range is the set of values that the input is mapped to.

--split--

## Linear scale

Maps continuous values to a continuous range.

```javascript
var linearScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, 600])
  .clamp(true)

console.log(linearScale(0));
console.log(linearScale(50));
console.log(linearScale(75));
```

--split--

## Time scale

Maps values in a time based domain to a range.

```javascript
var timesScale = d3
  .scaleTime()
  .domain([new Date(2019, 0, 1), new Date()])
  .range([0, 100])

console.log(timesScale(new Date(2016, 11, 15)))
```

--split--

## Quantized Scale

Maps a continuous range of values to a discrete set of values in the domain. The number of discrete values it maps to depends on the cardinality (number of values) of the input in the range function. 

```javascript
var qScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red","blue", "green"]);

console.log(qScale(0));
console.log(qScale(50));
console.log(qScale(75));
console.log(qScale(90));

// To see the range that maps to blue
console.log(qScale.invert("blue")); 
```

--split--

## Ordinal Scale

Map specific values in a domain to specific values in a range. The input will contain discrete values.

```javascript
var oScale = d3.scaleOrdinal()
  .domain(["poor", "good", "great"])
  .range(["red","blue", "green"]);

console.log(oScale("great"));
console.log(oScale("good"));
console.log(oScale("poor"));
```