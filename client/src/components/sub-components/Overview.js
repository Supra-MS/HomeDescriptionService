import React from 'react';
import SvgSuperHost from './svg/SvgSuperHost';

const Overview = ({ homeDesc, hostInfo, hostPic }) => {

  let placeType, propertyType = '';
  let hasStudio = false;

  if (homeDesc.overview_section) {
    placeType = homeDesc.overview_section.place_type.split(' ')[0];
    hasStudio = homeDesc.overview_section.has_studio;
    propertyType = homeDesc.overview_section.property_type.toLowerCase();
  }

  return (
    <div className="row">
      <div className="col-md-9">
        {homeDesc.overview_section &&
          <>
            <div className="overview-title">{placeType} {propertyType} hosted by {hostInfo.hostName}</div>

            <div className="navbar navbar-expand">
              <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <div className="nav-li">• {homeDesc.overview_section.no_of_guests} guests</div>
                  </li>

                  <li className="navbar-item">
                    <div className="nav-li">• {homeDesc.overview_section.no_of_bedrooms} bedrooms</div>
                  </li>

                  <li className="navbar-item">
                    <div className="nav-li">• {homeDesc.overview_section.no_of_beds} beds</div>
                  </li>

                  <li className="navbar-item">
                    {placeType.toLowerCase() === 'entire' && <div className="nav-li">• {homeDesc.overview_section.no_of_bath} bath</div>}
                    {placeType.toLowerCase() === 'private' && <div className="nav-li">• {homeDesc.overview_section.no_of_bath} private bath</div>}
                    {placeType.toLowerCase() === 'shared' && <div className="nav-li">• {homeDesc.overview_section.no_of_bath} shared bath</div>}

                  </li>
                </ul>
            </div>

          </>
        }

      </div>

      <div className="col-md-3">
        {hostInfo.hasProfilePic && hostInfo.isSuperHost ?
          <div>
            <img className="host-img" src={hostPic} height="90px" width="90px" alt="host-img"></img>
            <SvgSuperHost />
          </div>
          : (!hostInfo.hasProfilePic && hostInfo.isSuperHost) ?
            <div>
              <img className="host-img" src={hostPic} width="90px"></img>
              <SvgSuperHost />
            </div>
            : hostInfo.hasProfilePic ?
              <div>
                <img className="host-img" src={hostPic} height="90px" width="90px"></img>
              </div>
              : !hostInfo.hasProfilePic ?
                <div>
                  <img className="host-img" src={hostPic} height="90px" width="90px"></img>
                </div>
                : null}

      </div>
    </div>

  );
};

export default Overview;