
    
    var svg1 = dimple.newSvg("#img1", 600, 400); // first visualization about survival 
    d3.csv("sex.csv", function(data){ // data is taken into the function
        var chart = new dimple.chart(svg1, data); // creating the chart svg using the data from sex.csv
        x = chart.addCategoryAxis("x", ["Sex","Survived"]); // using the categories of sex and survived to make the graph
        chart.addMeasureAxis("y", "Survival Percentage");
        chart.addSeries("Survived", dimple.plot.bar); // adding the survived part as the series to sort by
        svg1.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Percentage: Men Vs Women"); // adding the captions on the image
    chart.addLegend(70, 10, 510, 20, "right");     
    chart.draw(); //making a call to the d3 draw function
    });


    var svg2 = dimple.newSvg("#img2", 600, 400); // second visualization
    d3.csv("age.csv", function(data){ // data is taken and loaded into the function
        var chart = new dimple.chart(svg2, data); //svg is declared here with name chart
        x = chart.addCategoryAxis("x", "Age Group"); // divided by Age groups in CSV file age.csv
        x.addOrderRule(["0-10", "10-20", "20-30", "30-40", "40-50", "50+"]);
        chart.addMeasureAxis("y", "Survival Percentage"); //survival percentage is plotted  in the y axis
        chart.addSeries(null,dimple.plot.scatter); // a scatter of points is used along with  a line plot
        chart.addSeries(null,dimple.plot.line); // null because no other ways to divide the data are given
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Percentage : Young Vs Old"); // captions are added to the imaged at the top using some formatting.
    chart.addLegend(65, 10, 510, 20, "right")
    chart.draw(); // call to the dimple draw function is used
    }); 


    var svg3 = dimple.newSvg("#img3",600, 400); // third visualization for class based survival rates
    d3.csv("class.csv", function(data){
        var chart = new dimple.chart(svg3, data); // data is taken from class.csv 
        chart.addCategoryAxis("x", ["Class","State"]); // 
        chart.addMeasureAxis("y", "Survival Percentage");
        chart.addSeries("State", dimple.plot.bar); // data is also clubbed into survived or died using this add serier function here
        svg3.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2) // how to position the text in the svg
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Effects of PClass on the passenger's chances of surviving"); // captions are added on top of the visualization
    chart.addLegend(65, 28, 510, 20, "right");
    chart.draw();
    });    

       

    
   