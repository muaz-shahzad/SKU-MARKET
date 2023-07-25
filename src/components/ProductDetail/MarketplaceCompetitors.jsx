import React from "react";
// import "datatables.net-responsive-bs5";
// import "datatables.net-fixedcolumns-bs5";
// import "datatables.net-fixedheader-bs5";
// import "datatables.net-buttons-bs5";
// import "datatables.net-select-bs5";
import "./index.css"
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';

const MarketplaceCompetitors = (param) => {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
    
      const data = () => {
        return {
          columns: [
            {
              label: 'Store Name',
              field: 'StoreName',
              width: 250,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
              },
            },
            {
              label: 'Offer Price',
              field: 'OfferPrice',
              width: 150,
            },
            {
              label: 'SOH',
              field: 'Sho',
              width: 150,
            },
            {
              label: 'Volume (24H',
              field: 'Volume',
              sort: 'asc',
              width: 150,
            },
            {
              label: 'Fulfilment Type',
              field: 'FulfilmentType',
              sort: 'disabled',
              width: 150,
            },
            {
                label: 'Offer Rank',
                field: 'OfferRank',
                sort: 'disabled',
                width: 150,
              },
              {
                label: 'Store Rate',
                field: 'StoreRate',
                sort: 'disabled',
                width: 150,
              },
              {
                label: 'Store Share',
                field: 'StoreShare',
                sort: 'disabled',
                width: 150,
              },
         
          ],
          rows: [
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
            {
                StoreName: 'Toys Party',
                OfferPrice: '18',
                Sho: '20',
                Volume: '15%',
                FulfilmentType: 'Express',
                OfferRank: '1',
                StoreRate: '4.2',
                StoreShare: '30%',
              clickEvent: () => testClickEvent(1),
            },
           
          ],
        };
      };
  return (

    <>
    <div className="container-width">
        <div className="competitor-insights">
            <div className="col-md-12 pb-3">
                <div className="row table-style">
                    <div className="col-md-12 text-bold">
                        <span className="table-title text-center text-lg-start">
                            SKU Marketplace Competitors Insights
                        </span>
                    </div>
                </div>
     
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
     
            hover
            scrollX
            scrollY
            maxHeight="50xp"
            data={data()}
            materialSearch
            fullPagination
          />
        </CDBCardBody>
      </CDBCard>
   
            </div>
        </div>

        <div className="row table-footer">
            <span style={{ marginTop: '-10px !important' }}>
                Designed for users to instantly see the market situations of
                competitors on the marketplace and predicts what will come
                next.
            </span>
        </div>
    </div>


</>
  );
};

export default MarketplaceCompetitors;
