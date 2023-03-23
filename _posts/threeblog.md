---
date: '2023-03-25T11:50:54.000Z'
title: 'React: The Concept of “composition”(”children props”)'
tagline: '#react #props'
preview: 'react, props'
image: >-
  https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2027&q=80
---

#How to add two components and wrap it up inside another components.

Here instead of div gonna use Card Component.

```
<Card className="expense-item">
-------
</div>
</Card>

```

Now if we are use it, we can not use custom components wrapper around other kind of contents. But it does work with built in HTML like for the div or h2 elements.

So how do we use in react?

In Card component we can use a special props.

```

function Card({Props.children}){
return
<div className="card">{Props.children}</div>
}

```
{props.children} 
Here children is reserve name and will always be the content between the opening and closing tags of my custom components. 

Some style might get broken. we can add our classes as a constant to fix those CSS style.

```
const classes = 'card ' + props.ClassName;

```
Now we can point this constant.

```
function Card(props){
const classes = 'card ' + props.ClassName;
return <div className={classes}>
{props.children}</div>
}
```

we use it because of some code duplication so the composition is important. 
And {props.children}  feature is allowing to create a wrapper components.
