---
title: Redesigning the flight booking experience
blog: work
date: 2017-11-23 17:41 UTC
prefix: hcde
company: University of Washington
companyLong: Human Centered Design and Engineering M.S. at the University of Washington
alt: Collage of flight layout element, calendar picker, no red eye and aisle seat large stylized checkboxes, and a large button
summary: Fly Happy, a flight booking system, allows travelers to search flights by criteria such as available window seats, more legroom, and outlets available at seats. This method allows travelers to exclude uncomfortable or inconvenient flights.
problem: Most booking websites allow the user to sort through the many flight options that are available with price being the primary factor. Travel bookers are unable to easily choose a flight that matches their unique preferences when flying, or even see if the flight they booked matches those preferences. While price is important to people who are booking flights, users should be able to sort and view flights based on their unique preferences and expectations.
process:
  - step:
    name: Research
    types: User interviews, profiles, and testing
    description:
      - paragraph: In addition to gathering competitor research (of which there is a saturated field), I conducted four interviews & three observations of people using their favorite flight booking tool. Overall, our team conducted twelve interviews and observations and used the information gathered about habits and preferences to graph out the relationships between this data.
      - paragraph: From the data, I distilled the information into a case study about one of my interviewees, Becky, because she represented a subset of users who are more focused on business travel and domestic flights around three to four hours.
      - paragraph: Conducting this research enabled us to decide which needs and wants travelers look for when booking flights, and include these as specific filtering criteria in our prototype.
    images:
      - image: work-hcde-2.png
      - image: work-hcde-3.png
      - image: work-hcde-4.png
  - step:
    name: Design
    types: Sketch + Javascript prototyping
    description:
      - paragraph: I contributed a bunch of sketches to our team review, which ideated over things like filtering choices, user flows, and marketing integrations. We ultimately chose one of my sketches to move forward as the basis of our design. I then started designing the interface in Sketch because we wanted to use InVision to tie screens together for this project, which would give my other team members an opportunity to explore both tools.
      - paragraph: After experiencing an issue with InVision not allowing users to select any combination of perks at once and have those screen partials display simultaneously, I switched to finishing an earlier version of the prototype I started in HTML, CSS, and Javascript. The JS toggles the search flight button after the fields for airports and dates are filled in and controls which flight options (based on a curated list of real flight data) are displayed based on which perks are selected. Ultimately this method allowed us to test with more accuracy which flight options were more important to users.
    images:
      - image: work-hcde-5.png
      - image: work-hcde-6.png
  - step:
    name: Testing
    types: Usability tests and recommendations
    description:
      - paragraph: "After completing our prototype, we tested the live version with several participants using the same prompts. These included: “Imagine you’d like to book a flight from Seattle to New York from January 25th to February 2nd. Show me how you’d do that.” and “Imagine that you’d like to book a flight with the same cities and dates as before, but now you are traveling for business and would like to make sure you have wifi, an outlet, and plenty of legroom on the flight in order to do your work during the trip. What would you do?” We wanted to make sure we tested both for individual preferences without much guidance and difference scenarios. "
      - paragraph: Eight people were tested across our four-person teams. Usability issues were aggregated and ranked according to number of people affected, and the Usability Problem Severity rating described in Jakob Nielsen’s 1/1/95 article Severity Ratings for Usability Problems for NN/g. Our top two issues involved people not corresponding the icons for the ‘perks’ chosen with the icons underneath the flights, and confusion with understanding what the price underneath the ‘perks’ meant.
      - paragraph: To address these two issues, we did a quick iteration of our prototype with plans to retest. For people not corresponding the icons on the left in the filter with icons underneath the flights in results, we decided to show only the icons which users had selected (not all present on a flight), change the colors to be more accurate, increase the size of the icons, and add the icons to the other flights in addition to the recommended one. For people experiencing confusion understanding the price underneath the ‘perk’, we decided to include a hover tooltip as a quick fix to test if this information should be included at all or the price removed entirely.
    images:
      - image: work-hcde-8.gif
---
