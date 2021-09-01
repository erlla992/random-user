import React from 'react';
import { Box, Avatar, Typography, } from '@material-ui/core';
import { Mail as MailIcon, Phone as PhoneIcon, PhoneAndroid as PhoneAndroidIcon } from '@material-ui/icons';
import { DataRow, Text, Label, IconText } from "../styles";
import { useStyles } from "./UserDataComponents.styles";
//import classes from '*.module.css';


export interface UserOverviewDataProps {
  name: string,
  imageUrl: string,
  phone: string,
  cell: string,
  email: string,
}

export const UserOverviewData = ({ name, imageUrl, phone, cell, email }: UserOverviewDataProps) => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Avatar className={classes.avatar} alt={name} src={imageUrl} />
      </Box>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Box>
        <PhoneIcon className={classes.icon} /><IconText>{phone}</IconText><br />
        <PhoneAndroidIcon className={classes.icon} /><IconText>{cell}</IconText><br />
        <MailIcon className={classes.icon} /><IconText>{email}</IconText>
      </Box>
    </>
  );
}

export interface UserMainDataProps {
  gender: string,
  dateOfBirth: string,
  address: string,
  nationality: string,
  registred: string,
  username: string,
  uuid: string,
}

export const UserMainData = ({
  gender,
  dateOfBirth,
  address,
  nationality,
  registred,
  username,
  uuid
}: UserMainDataProps) => {
  const classes = useStyles();

  return (
    <>
      <h2 className={classes.userSectionHeader}>Personal data</h2>
      <DataRow>
        <Label>Gender</Label><Text>{gender}</Text></DataRow>
      <DataRow>
        <Label>Date of birth</Label><Text>{dateOfBirth}</Text>
      </DataRow>
      <DataRow>
        <Label>Address</Label><Text>{address}</Text>
      </DataRow>
      <DataRow>
        <Label>Nationality</Label><Text>{nationality}</Text>
      </DataRow>
      <h2 className={classes.userSectionHeader}>Login data</h2>
      <DataRow>
        <Label>Registered</Label><Text>{registred}</Text>
      </DataRow>
      <DataRow>
        <Label>Username</Label><Text>{username}</Text>
      </DataRow>
      <DataRow>
        <Label>UUID</Label><Text>{uuid}</Text>
      </DataRow>
    </>
  );
}
