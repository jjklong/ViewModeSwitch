<!--
	• What does it do?
        What interactive elements exist?
    		How do you interact with them?
    		What visual effects are produced by interacting?
	• How does it do it?
    		What existing HTML elements are changed?
    		What new HTML elements are created?
        What CSS styles are used to produce the effect? -->

##What does it do?
---
###What interactive elements exist?
* **Grid view and list view icons** *in the header above line break*
* **Add to cart option** *next to each item*
* **Toggle option** *between two pages*

###How do you interact with them and what visual effects are produced by interacting?
**Grid / List Icons**
Hover:
* changes grid/list icon color from grey to blue
Click:
* changes page view from option
* adds item to cart when clicked

#How does it do it?
**Grid / List Icons**
Hover:
* CSS changes style when hovering over the icon
Click:
* JS assigns a function to change the css file in the <head> tag

---

###What existing HTML elements are changed?
* The HTML link to two different CSS styles

###What new HTML elements are created?
* A new CSS href is changes when the icon is clicked

###What CSS styles are used to produce the effect?
* :hover is used to change the background color
