---
title: "README"
author: "Pranay Valson"
date: "8/15/2017"
output: html_document
---

## P7. Data Visualization: Titanic Data Exploration

### Summary

The visulizations show how survival was affected by various demographics in the population of Titanic passengers. This was primarily done using bar graphs and line graphs. Stacking (side by side) or within the same bar, was used when it provided more context and clarity, otherwise avoided.

1. We were able to get qualitative understanding of the people who survived the disaster, It is pretty clear that being a young woman in the upper class having paid more have the highest rates of survival.
2. We were also able to get quantitive values of the people who survived the disaster, mainly women survived more often and by significant margin. 197 of the 261 women in the data set survived, that's a survival chance of 75% when compared to a survival chance of 20.52% for men.
3. It was found that survivors on an average paid almost 2X as much compared to their dead counterparts to buy their tickets to survival into a higher class. People who survived has a class average of 1.8. Close to 2nd Class but also many in class 1.

### Design
The Titanic dataset was chosen since it was easily navigable and editable using pandas. The TitanicData.html file contains all the wrangling done on the data.

The first visualization (men vs women) and the third (high vs low class) were chosen to be bar charts since they
represented a passenger percentage and this could be compared direclty in the image. In the first I chose to have a stacked
bar plot so that relative understading of populations could be seen directly in both cases (total) people of a certain sex and 
total people of a certain sex who survived. The color here was chosen to best represent the sexes male or female with contrasting but not too vibrant color to be appealing to the eye. In the third I chose a bar plot in which the the survivors and non survivors could be stacked in the net representation of that class among people who bought tickets, in this case it made most sense to represent. Here colors were chosen so that survival and death could be best represented without being too jaaring to the eye.
In the second vis I chose to have a line plot with some scatter points to best show a trend in the data, that for older people
the survival percentage steadily decreases. 

Story : On the morning of April 15, 1912, the sinking of the Titanic the previous night shocked the world. The ship was considered to have been so well constructed it was believed she could sustain any amount of damage and still remain afloat. Late on the night of April 14, 1912, the sinking of the Titanic proved this idea wrong in a horribly tragic way. The causes of Titanic to sink have been the subject of much study and debate. In 1912 the sinking of the Titanic began late on the night of April 14th. Information on the sinking Titanic indicates that the ship approached a massive iceberg, and although efforts were made to steer clear of the large frozen mass, all efforts were to no avail. There were far too few lifeboats on board, and hardly any were filled to capacity. As a result roughly 700 of the 2,224 passengers survived the wreck. They were picked up by the Carpathia, a nearby ship.


Patterns explored:

1. Survival Percentage Men Vs Women.
2. Survival Percentage Young Vs Old.
3. Survival Rate Low Class Vs High Class. 


Findings from the explorations: 

1. We were able to get qualitative understanding of the people who survived the disaster, It is pretty clear that being a young woman in the upper class having paid more have the highest rates of survival.

2. We were also able to get quantitive values of the people who survived the disaster, mainly women survived more often and by significant margin. 197 of the 261 women in the data set survived, that's a survival chance of 75% when compared to a survival chance of 20.52% for men.

3. It was found that survivors on an average paid almost 2X as much compared to their dead counterparts to buy their tickets to survival into a higher class. People who survived has a class average of 1.8. Close to 2nd Class but also many in class 1.

The preliminary visualization were plotted using iPython (matplotlib), pandas and python notebook (please see TitanicData.html). After data exploration, visualizations are drawn using dimple. The charts used are: Stacked bar chart, Standard bar chart as well as Scatter chart. The choice was made after trying different variations. 

### Before feedback:(for index1.html)
The html made before feedback can be found in: index_initial.html

### Feedback

The feedback was gathered as per Udacity guidelines:

#### #1

> A good summary at the beginning of what you're trying to do and why is missing. Please add this.

#### #2

> some kind of captions for the images are missing and it also seems like you can look at people in other ways, maybe add another graph?

####  #3

> add some interactivity to the images and also make the stacked bars more intutive. 

#### #4

> Add comments to the code to make it understandable on a revisit.


#### #5

> Visualization 1 is  slightly hard to understand. Please include a distrbution 
of actual sex ratio and then the survivor one separated from it.

####  #6

> visualization 3 change, the number of passengers to passenger percentage and stacked bar with live/dead populations in the same bar. 

#### #7

> Include choices about design and why I made them.


#### #8

> Changes were made to the vis 1 to reflect survival percentage

### Post Feedback: (for index.html)
Certain changes are made:

1. Captions are added with a summary
2. Stacked bars were made more intuitive by placing next to each other.
3. A summary at the end was added which summarized the findings.
4. A new plot which explored the class chances of survival was added.
5. Plot on Men Vs Women changed to reflect first a overall demographic followed 
by survival with a passenger percentage
6. Plot on High Vs Low class changed to reflect first an overall representation of
class from total then a passenger percentage that survived from this.





