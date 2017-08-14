    
    
      
    var svg1 = dimple.newSvg("#img1", 600, 400);
    d3.csv("sex.csv", function(data){
        var chart = new dimple.chart(svg1, data);
        x = chart.addCategoryAxis("x", ["Sex", "Survived"]);
        chart.addMeasureAxis("y", "Passenger Percentage");
        chart.addSeries("Survived", dimple.plot.bar);
        svg1.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Percentage: Men Vs Women");
    chart.addLegend(70, 10, 510, 20, "right");     
    chart.draw();
    });


    var svg2 = dimple.newSvg("#img2", 600, 400);
    d3.csv("age.csv", function(data){
        var chart = new dimple.chart(svg2, data);
        x = chart.addCategoryAxis("x", "Age Group");
        x.addOrderRule(["0-10", "10-20", "20-30", "30-40", "40-50", "50+"]);
        chart.addMeasureAxis("y", "Survival Percentage");
        chart.addSeries(null,dimple.plot.scatter);
        chart.addSeries(null,dimple.plot.line);
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Percentage : Young Vs Old");
    chart.addLegend(65, 10, 510, 20, "right")
    chart.draw();
    }); 


    var svg3 = dimple.newSvg("#img3",600, 400);
    d3.csv("class.csv", function(data){
        var chart = new dimple.chart(svg3, data);
        chart.addCategoryAxis("x", ["Class"]);
        chart.addMeasureAxis("y", "Passenger Numbers");
        chart.addSeries("Survived", dimple.plot.bar);
        svg3.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Low Class Vs High Class");
    chart.addLegend(65, 28, 510, 20, "right");
    chart.draw();
    });    

 


       

    
   