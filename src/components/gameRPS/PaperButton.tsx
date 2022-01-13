import { Button, ButtonProps } from "@material-ui/core";
import React, { ReactElement } from "react";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { hand-paper } from '@fortawesome/free-solid-svg-icons'

interface Props extends ButtonProps {}

export default function PaperButton(_props: Props): ReactElement {
  return (
    <>
      {/* <Button startIcon={<FontAwesomeIcon icon="hand-paper" />}>Paper</Button> */}
      <Button startIcon={<ReceiptIcon />} {..._props}>
        Paper
      </Button>
    </>
  );
}
