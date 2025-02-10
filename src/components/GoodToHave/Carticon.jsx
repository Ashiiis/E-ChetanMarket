// src/components/GoodToHave/CartIcon.jsx

import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} size="small" className="cart-icon">
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default CartIcon;