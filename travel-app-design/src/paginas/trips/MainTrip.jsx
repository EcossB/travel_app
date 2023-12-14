import { Menu } from "../home/Menu";
import FullScreenDialog from "./Countries-info/Dialog/Dialog";
import { TripSearch } from "./Search/TripSearch";
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const MainTrip = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = 'Turisteo';
    };
  }, [pageTitle]);
  
  return (
    <div>
    <Menu />
    <TripSearch />
    <FullScreenDialog />
    </div>
  );
}

MainTrip.propTypes = {
  pageTitle: PropTypes.any,
};
