---
title: "Container with the most water"
date: "January 23, 2023"
category: "Problem Solving"
---

You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.


*Area = l x w - which translates to the the height of the container times the distance between them*

#### First you should remember the steps for solving problems:
[[2. Arrays  - Question 1  Google Interview Question Two Sum (Easy)#Steps for solving any problem :]]

#### Brute force solution
```js
var maxArea = function(height) {

    let area = 0;

    for(let p1 = 0; p1 < height.length; p1++){

        for(let p2 = p1+1; p2 < height.length; p2++){
            if (height[p1] <= height[p2]){
                if(area < height[p1] * (p2-p1)) area = height[p1] * (p2-p1);
            } else {
                if (area < height[p2] * (p2-p1)) area = height[p2] * (p2-p1)
            }
        }
    }

    return area;
};
```

*It didn't pass all leetcode tests because of its Big O time complexity is (O^2) so the time limit is exceeded because unlike the first question, in this question we must look for every possible solution.

#### The next code snippet is another version of my [[#Brute force solution]].

```js
var maxArea = function(height) {
    let maxWaterContainer = 0;
    for(let p1 = 0; p1 < height.length; p1++){
        for(let p2 = p1+1; p2 < height.length; p2++){
			const currentheight = Math.min(height[p1], height[p2]);
			const width = p2-p1;
			const area = currentheight * width;
			
			maxWaterContainer = Math.max(maxWaterContainer, area);
        }
    }
    return maxWaterContainer;
};
```

*Similarly to our previous question the big O analysis*

Time Complexity | Space Complexity
-- | --
O(n^2) | O(1)

#### So how do we optimize our code solution ? 

*In this particular problem we should learn a new technique which is called **two shifting pointers** and this is how it works:*

#### Two shifting pointers technique
1. We need to think about,  **How** to move these pointers ?
2. **When** it is considered done moving ?
3. **What** is the rational between determining which of them to move in the first place?

#### After understanding the two pointers technique this is my optimal solution

```js
var maxArea = function(height) {

    let maxWaterContainer = 0;
    let p1 = 0;
    let p2 = height.length - 1;

    if (height.length === 2) return Math.min(height[0], height[1])

    while ((p2 - p1) >= 1) {
        width = p2 - p1;
        if (height[p1] < height[p2]) {
            maxWaterContainer = Math.max(maxWaterContainer, width * height[p1])
            p1++
        } else {
            maxWaterContainer = Math.max(maxWaterContainer, width * height[p2])
            p2--
        }
    }
    return maxWaterContainer;
};
```

#### Clean Code Optimal Solution

```js
const maxArea = (height) => {
	let p1 = 0, p2 = height.length - 1, maxWaterContainer = 0;
	
	while (p1 < p2){
		const currentheight = Math.min(height[p1], height[p2]);
		const width = p2 - p1;
		const area = currentheight * width;
		maxWaterContainer = Math.max(maxWaterContainer, area);

		if (height[p1] <= height[p2]) p1++;
		else p2--;
	}
	
	return maxWaterContainer;
}
```

Optimal Solution Big O Analysis:

Time Complexity | Space Complexity
-- | --
O(n) | O(1)

