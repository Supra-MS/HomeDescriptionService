import React from 'react';

const AmenitiesModal = ({ homeDesc }) => {
  let notIncludedAmenities = [];
  let first4NotIncAmenities = [];
  if (homeDesc.amenities_section) {
    let obj = homeDesc.amenities_section;
    for (let i in obj) {
      console.log(typeof (obj[i]) , 'PPP', !Array.isArray(obj[i]))
      if (typeof (obj[i]) === 'object' && !Array.isArray(obj[i])) {
        for (let j in obj[i]) {
          if (!obj[i][j]) {
            notIncludedAmenities.push(j);
          }
        }
      } else {
        if (!obj[i]) {
          notIncludedAmenities.push(i);
        }
      }
    }
  }
  console.log(!notIncludedAmenities.length, notIncludedAmenities.length > 5, '0000')
      if (notIncludedAmenities.length > 5) {
        first4NotIncAmenities = notIncludedAmenities.slice(0, 5);
      }

  return (
    <>
      <h4 className="amenity-modal">Basic</h4>
      <p className="hl-title">Wifi</p>
      <p className="hl-mini-title">Continuous access in the listing</p>
      <hr></hr>

      <p className="hl-title">Laptop-friendly workspace</p>
      <p className="hl-mini-title">A table or desk with space for a laptop and a chair that’s comfortable to work in</p>
      <hr></hr>

      <p className="hl-title">Washer</p>
      <p className="hl-mini-title">In the building, free or for a fee</p>
      <hr></hr>

      <p className="hl-title">Heating</p>
      <p className="hl-mini-title">Central heating or a heater in the listing</p>
      <hr></hr>

      <p className="hl-title">TV</p>
      <hr></hr>

      <p className="hl-title">Essentials</p>
      <p className="hl-mini-title">Towels, bed sheets, soap, and toilet paper</p>
      <hr></hr>

      <p className="hl-title">Dryer</p>
      <p className="hl-mini-title">In the building, free or for a fee</p>
      <hr></hr>

      <p className="hl-title">Air conditioning</p>
      <hr></hr>

      <p className="hl-title">Iron</p>
      <hr></hr>

      <p className="hl-title">Hot water</p>
      <hr></hr>

      <p className="hl-title">Cable TV</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Family features</h4>
      <p className="hl-title">Crib</p>
      <hr></hr>

      <p className="hl-title">Children’s books and toys</p>
      <hr></hr>

      <p className="hl-title">High chair</p>
      <hr></hr>

      <p className="hl-title">Outlet covers</p>
      <hr></hr>

      <p className="hl-title">Children’s books and toys</p>
      <hr></hr>

      <p className="hl-title">Changing table</p>
      <hr></hr>

      <p className="hl-title">Pack ’n Play/travel crib</p>
      <hr></hr>

      <p className="hl-title">Babysitter recommendations</p>
      <hr></hr>

      <p className="hl-title">Children’s dinnerware</p>
      <hr></hr>

      <p className="hl-title">Bathtub</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Facilities</h4>
      <p className="hl-title">Free street parking</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Dining</h4>
      <p className="hl-title">Dishes and silverware</p>
      <hr></hr>

      <p className="hl-title">Cooking basics</p>
      <p className="hl-mini-title">Pots and pans, oil, salt and pepper</p>
      <hr></hr>

      <p className="hl-title">Oven</p>
      <hr></hr>

      <p className="hl-title">Stove</p>
      <hr></hr>

      <p className="hl-title">Microwave</p>
      <hr></hr>

      <p className="hl-title">Refrigerator</p>
      <hr></hr>

      <p className="hl-title">Kitchen</p>
      <p className="hl-mini-title">Space where guests can cook their own meals</p>
      <hr></hr>

      <p className="hl-title">Coffee maker</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Guest access</h4>
      <p className="hl-title">Keypad</p>
      <p className="hl-mini-title">Check yourself into the home with a door code</p>
      <hr></hr>

      <p className="hl-title">Private entrance</p>
      <p className="hl-mini-title">Separate street or building entrance</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Logistics</h4>
      <p className="hl-title">Long term stays allowed</p>
      <p className="hl-mini-title">Allow stay for 28 days or more</p>
      <hr></hr>

      <p className="hl-title">Luggage dropoff allowed</p>
      <p className="hl-mini-title">For guests' convenience when they have early arrival or late departure</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Bed and bath</h4>
      <p className="hl-title">Extra pillows and blankets</p>
      <hr></hr>

      <p className="hl-title">Bed linens</p>
      <hr></hr>

      <p className="hl-title">Hangers</p>
      <hr></hr>

      <p className="hl-title">Hair dryer</p>
      <hr></hr>

      <p className="hl-title">Shampoo</p>
      <hr></hr>

      <p className="hl-title">Hangers</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Outdoor</h4>
      <p className="hl-title">Patio or balcony</p>
      <hr></hr>
      <br></br>

      <h4 className="amenity-modal">Safety features</h4>
      <p className="hl-title">Fire extinguisher</p>
      <hr></hr>

      <p className="hl-title">Carbon monoxide alarm</p>
      <hr></hr>

      <p className="hl-title">Smoke alarm</p>
      <hr></hr>

      <p className="hl-title">First aid kit</p>
      <hr></hr>

      <h4 className="amenity-modal">Not Included</h4>
      {first4NotIncAmenities.map((item, i) => {
        return (
          <p className="no-amenity" key={i}>{item}</p>
        )
      })}
      {notIncludedAmenities.length > 5 && <span className="read-more" style={{"marginLeft": "35px", "fontSize": "smaller"}}>See more ...</span>}
    </>
  );
};

export default AmenitiesModal;