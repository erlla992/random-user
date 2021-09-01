import styled from 'styled-components';
import { progressModal, white, mediumGrey, darkGrey } from '../colors';

export const CardLabel = styled.div`
  font-weight: bold;
  padding: 4px;
`

export const Column = styled.span`
  flex: 1;
`

export const ProgressHolder = styled.div`
  margin: auto;
`

export const ProgressModal = styled.div`
  width: 100%;
  z-index: 1000;
  height: 100%;
  position: fixed;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(${progressModal}, 0.4);
  display: inline-flex;
`

export const IconText = styled.span`
  color: ${white};
  padding-left: 8px;
  vertical-align: top;
`

export const DataRow = styled.div`
  overflow: auto;
  line-height: 28px;
  margin: 0px auto;
`

export const Label = styled.div`
  float: left;
  width: 39%;
  font-size: 90%;
  color: ${mediumGrey};
  min-width: 200px;
  text-align: right;
  font-weight: bold;
`

export const Text = styled.div`
  float: right;
  text-align: left;
  width: 59%;
  color: ${darkGrey};
  min-width: 200px;
`