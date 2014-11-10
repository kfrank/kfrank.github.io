---
layout: post
title: "Designing for Scale" 
date: 2014-09-15 10:29:21
category: thoughts
published: true
---

This past Saturday, [Ali Felski](http://twitter.com/felskia) and I had the pleasure of doing a workshop at the [Code(Her) Conference](http://codeherconference.com/). We went over our process for tackling user experience and user interface design for large web builds and the considerations we take when creating these sites. If you'd like, download our [slides]({{ site.baseurl }}/assets/img/blogs/building-for-scale.pdf) for more information. For more clarification, I thought I'd outline my process for designing interfaces for scale.

## Why does it matter?
We've all been on a project that seems to take a life of it's own and morph into something unrecognizable. Projects like this soon have no clear goals and are like buildings that keep being built on top of buildings. Team members change over time, features may change over time, but design direction should stay solid throughout all this change. Designing for scale is about predicting the future of a site that'll live on after the team is done initially building and designing.


## Three goals for designing for scale

### 1. Flexibility
On larger projects, things can change rapidly. Since there are more moving parts, one change from a client could potentially mean a rework of an entire part of the site. Building a website as a system usually prevents headaches associated with these problems.

### 2. Consistency
Components that act the same will look similar across all pages so websites stay on brand and don't confuse users.

### 3. Speed
If a new feature is discovered from user testing as being of prime importance and needs to be built right away, styles already exist to do so.

## Dynamic Content

This is a consideration that's paramount when designing static comps, and one which will most likely arise as a design problem when designing in-browser. In either situation, it's inevitable that content will be both too short and too long.

Developers usually compensate for this by either limiting characters on input or cutting off text after a certain number of characters using an elipsis.

We can do better than that.

By asking "what if?" while designing, it's easier to add the correct solutions for little or lots of text. 

## Styleguide-driven design

A lot of people talk about developing based off generated styles that keep consistency of visual direction throughout a website, but no one really talks about how a designer starts from functionality and gets to the point of enough designed user interface to have a complete styleguide.

Clients love to think in terms of pages and deliverables. Developers love reusable components and not pages. Users don't care beyond the homepage as long as they can accomplish a task. As a designer, I need to find a compromise between presentation and creating a system that'll grow after I'm finished with it.

### Process, not tools

It doesn't matter what you use to do the work. There'll never be a magical tool that'll do the work for you. Use the tools you're comfortable in (or not, if you so choose), work best with your team, and help you create the best work possible. What works for me, might not work for you.

### Taking inventory

This could take a while.

I start by going through every wireframe and listing out all the components by labeling them as a css class. At ISL, we're using [BEM methodology](http://bem.info/method/) for our css structure, so I usually list them this way.

Additionally, I screenshot all these common elements and throw them into a Sketch file for later. It helps having a visual example for each component in addition to just listing them out.

### Static approach

Typically created using Sketch because of it's ability to link symbols. This is where that file full of screenshots comes in handy.

I like to start out designing a few important pages. These pages get shown to the client so we know we're headed in the right direction. Then the components on these pages are turned into symbols and can be used on other pages. There's a significant back and forth here where symbols get slightly updated to become more flexible over a greater amount of pages. I also think it helps to continually look at all the pages being designed holistically to make sure everything is headed in the same design direction.

In the Sketch file, make sure there's a page with all the symbols that'll act as the base for the styleguide. Developers will love you forever for making this.

Not every page will be designed as a static comp. We're aiming for the pages with the most reused components. Design just enough so it can be translated to code as soon as possible. Type looks different in photoshop, sketch, and illustrator. Elements look different at different browser sizes. There's no replacement for evaluating a design in it's intended medium.

### Inbrowser approach

(This is my preferred approach, but if I'm working with designers who don't know code, it may not be the approach chosen.)

I start by laying out a base style with color, typography, form inputs, etc. Everything including in this base style is extremely similar to what Brad Frost outlines as atoms in [Pattern Lab](http://pattern-lab.info).

After this, I can start designing components, every so often switching between pages that share those components to see how well they integrate. You can't just design all components on their own and expect a great site. Sure, it'll be flexible, but most likely, the ui will look pieced together. We don't want that. We're aiming for great, not passable. During this phase, there will be a lot of back and forth where components influence pages and pages influence components. Focus on the little details and then step back every once and a while to look at the whole thing.

As components are added and change, they're linked to a styleguide that also changes. Any designer or developer can pull from that styleguide to keep consistency.

## Evaluate & Iterate

Nothing's ever 100% right the first go around. Know this and plan for it.

A large site doesn't stop when the project ends, it keeps on living and evolving far after all the papers have been signed and the checks delivered.