import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Popover,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import T from 'prop-types';
import clsx from 'clsx';
import months from '../../constants';
import styles from './list.module.css';
import useStyles from './listStyles';

export default function MonthList({ users, userCounter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMonth, setMonth] = useState(0);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
    setMonth(event.currentTarget.id);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const usersByMonths = month =>
    users.filter(({ dob }) => new Date(dob).getMonth() === month);
  const classes = useStyles();
  return (
    <>
      {months.map((month, index) => {
        return (
          <div
            key={month}
            id={month}
            className={classes.root}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Accordion
              classes={{
                root: clsx(
                  userCounter[index] <= 2 && classes.summaryGray,
                  userCounter[index] >= 3 && classes.summaryBlue,
                  userCounter[index] >= 7 && classes.summaryGreen,
                  userCounter[index] >= 11 && classes.summaryRed,
                ),
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${month}-content`}
                id={`panel-${month}-header`}
              >
                <Typography className={classes.heading}>{month}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ol className={styles.usersList}>
                  {usersByMonths(index).map(({ id, firstName, lastName }) => (
                    <li key={id}>{`${firstName} ${lastName}`}</li>
                  ))}
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{`Users born in ${currentMonth}: ${
          userCounter[months.indexOf(currentMonth)]
        }`}</Typography>
      </Popover>
    </>
  );
}

MonthList.propTypes = {
  users: T.arrayOf(
    T.shape({
      id: T.string,
      firstName: T.string,
      lastName: T.string,
      dob: T.Date,
    }),
  ).isRequired,
  userCounter: T.shape({
    [T.number]: T.number,
  }).isRequired,
};
