var salesTeam = {
  name: 'Arnaldo McDermott',
  individualSales: 14,
  leadsInProgress: 10,
  manages: [
    {
      name: 'Lavina Romaguera',
      individualSales: 15,
      leadsInProgress: 22,
      manages: [
        {
          name: 'Glen Hodkiewicz',
          individualSales: 12,
          leadsInProgress: 10,
          manages: []
        }
      ]
    },
    {
      name: 'Rey Hills',
      individualSales: 19,
      leadsInProgress: 5,
      manages: []
    }
  ]
};


//totalSales(salesTeam)
//
// returns 60

var sales = 0;

var totalSales = function (salesTeam) {

  sales += salesTeam.individualSales;
  if(salesTeam.manages.length > 0)
  {
    for(var i = 0; i < salesTeam.manages.length; i++)
    {
      totalSales(salesTeam.manages[i]);
    }
  }
  return sales;

};


