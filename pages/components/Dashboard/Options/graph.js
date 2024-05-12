import React from 'react'
import Image from 'next/image';

export default function
  () {
  <script src="https://www.gstatic.com/charts/loader.js"></script>
  const countries = [["Russia", "ru"], ["Canada", "ca"], ["China", "cn"], ["United States", "us"], ["Brazil", "br"], ["Australia", "au"], ["India", "in"], ["Argentina", "ar"], ["Kazakhstan", "kz"], ["Algeria", "dz"]];
  const users_reached = [300, 342, 456, 532, 246, 778, 332, 124, 890, 900]
  function LoadGoogle() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Item 1', 5],
      ['Item 2', 6],
      ['Item 3', 4],
      ['Item 4', 3],
      ['Item 5', 7]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {
      'width': 450, 'height': 450,
      legend: 'none',
      // is3D: true, 
      slices: {
        0: { color: "#0891b2" },
        1: { color: "#0e7490" },
        2: { color: "#155e75" },
        3: { color: "#164e63" },
        4: { color: "#083344" }
      }
    };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
  return (
    <div>
      <div className='flex flex-col'>
        <div style={{ backgroundColor: "#00000015" }} className=' w-full p-2 mt-3'><h4 onClick={() => setTimeout(LoadGoogle, 1000)} className='text-center pointer'>Demograph</h4></div>
        <div className='-ml-3 ' id="piechart"></div>
        <div className='p-2 '>
          <div className='grid grid-cols-2'>
            <div className='cols-start-1 col-end-2 bg-neutral-100'>
              <h5 className='mb-4 text-center mt-3'>Countries</h5>
              <hr />
              {
                countries.map((country) => {
                  return <span className='flex space-x-3 my-2 ml-5'><span><Image className='bg-black p-2 rounded-xl' width={48} height={48} src={`https://flagcdn.com/48x36/${country[1]}.png`} alt="..." /></span><span className='font-semibold mt-2'>{country[0]}</span></span>
                })
              }
            </div>
            <div className='cols-start-2 col-end-3 bg-neutral-100 '>
              <h5 className='mb-4 text-center mt-3'>Users Reached</h5>
              <hr />
              {
                users_reached.map((users) => {
                  return <span className='flex space-x-3 my-3 ml-10'><span className='font-semibold mt-2'>{users}</span></span>
                })
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
