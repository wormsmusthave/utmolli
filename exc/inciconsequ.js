let nodes = []; // Initialize an empty array

// Assuming children is an array of elements
let children = ["child1", "child2", "child3"];

// Pushing elements from children array to nodes array
for (let i = 0; i < children.length; i++) {
    nodes.push(children[i]);
}

console.log(nodes); // Output: ["child1", "child2", "child3"]
