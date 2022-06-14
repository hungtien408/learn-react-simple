import { Box, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: theme.spacing(1),
      transition: 'all .25s',
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
      },
    },
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryApi.getAll();
        setCategoryList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed to fetch category list: ', error);
      }

      setLoading(false);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    if (!onChange) return;
    onChange(category.id);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      <ul className={classes.menu}>
        {loading
          ? Array.from(new Array(8)).map((x, index) => (
              <li key={index}>
                <Skeleton variant="rect" width="100%" />
              </li>
            ))
          : categoryList.map((category) => (
              <li key={category.id} onClick={() => handleCategoryClick(category)}>
                <Typography variant="body2">{category.name}</Typography>
              </li>
            ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
