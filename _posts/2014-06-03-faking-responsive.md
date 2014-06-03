---
published: false
---

Responsive design has been forcing digital agencies for the past few years to rethink their traditional waterfall processes. It's tough enough trying to nail down a visual design when your client is deliberating over the font size of navigation items, asking questions like: "Why can't we decrease the size of the carousel to view more items below the fold?"

Yes. We all still get asked this.

In an ideal world, all designers would be able to flawlessly code up their designs and browser test them (because we know someone's bound to be viewing the page in IE). Presenting to clients and iterating through designs based on feedback would be as simple as changing a few backgrounds, images and placements of elements in Photoshop or Illustrator. We can't all have that. A girl can hope, right?

Working on a design team with several designers on the same project has taught me to be extremely flexible in the methods we use to create and present work to clients. Some designers know code. Great. Some designers are wizs at Illustrator. Also great. We all have different tools we prefer and work quickly in. I love that some people on my team know more about certain tools and we all still make great designs using different methods.

But at the end of the day, we're still presenting a picture of the website we intend to create. Faking responsive with static comps gets us one step closer by allowing the client to view the correct sizing of type, elements and images based on their viewport. But how do we do that?

Let's start off by assuming we'll still have static comps. Because we're trying to be really nice to our developers, we're also creating separate comps for our viewports that are sized appropriately based on width.

I like to start in Sketch with their 'Web Design' template, which gives us four artboards: Desktop HD at 1440 pixels wide, Desktop at 1024 pixels wide, Tablet Portrait at 768 pixels wide, and Mobile Portrait at 320 pixels wide. As a side note, we probably want to make sure we're saving these both @1x and at @2x in case our client is on a retina device.

Next, we want a simple html page with a css file attached where we list out all of our comp images. We also want to make sure we're adding a class to each image so we can reference that in css.

    <body>
        <img src="_/img/comp_desktophd.jpg" alt="" class="desktophd">
        <img src="_/img/comp_desktop.jpg" alt="" class="desktop">
        <img src="_/img/comp_laptop.jpg" alt="" class="laptop">
        <img src="_/img/comp_tablet.jpg" alt="" class="tablet">
        <img src="_/img/comp_mobile.jpg" alt="" class="mobile">
    </body>
    
But this shows all the images and we only want to show the one that fits the viewport for our user. So in css, we'll hide all the elements and display only the one that corrisponds to our comp width: 

    @media screen and (min-width: 1024px) {
        .desktophd, .desktop, .laptop, .tablet, .mobile {
            display: none;
        }
        .desktop {
            display: block;
            width: 100%;
        }
    }
    
Since our desktop comp is 1024 pixels wide, we'll show that when the user's viewport is at 1024 pixels or higher while hiding everything else.
