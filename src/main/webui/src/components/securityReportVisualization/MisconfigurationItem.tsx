import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Misconfiguration } from "../../types";
import "./MisconfigurationItem.css";

const MisconfigurationItem = ({
  misconfiguration,
  keyIdentifier,
}: {
  misconfiguration: Misconfiguration;
  keyIdentifier: string;
}) => {
  return (
    <Accordion key={misconfiguration.resource + keyIdentifier}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${
          misconfiguration.rule_description + keyIdentifier
        }-content`}
        id={`${misconfiguration.rule_description + keyIdentifier}-header`}
        className={`severity-${misconfiguration.severity}`}
      >
        <Typography>
          {misconfiguration.resource}, Line:{" "}
          {misconfiguration.location.start_line} -{" "}
          {misconfiguration.location.end_line}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <b>Severity:</b> {misconfiguration.severity}
        </Typography>
        <Typography>
          <b>Violation:</b> {misconfiguration.rule_description}
        </Typography>
        <Typography>
          <b>Impact:</b> {misconfiguration.impact}
        </Typography>
        <Typography>
          <b>Solution:</b> {misconfiguration.resolution}
        </Typography>
        <Typography>
          <b>Resource:</b> {misconfiguration.resource}
        </Typography>
        <Typography>
          <b>From line:</b> {misconfiguration.location.start_line}
        </Typography>
        <Typography>
          <b>To line:</b> {misconfiguration.location.end_line}
        </Typography>
        <Link href={misconfiguration.links[0]} rel="noopener" target="_blank">
          Read more
        </Link>
      </AccordionDetails>
    </Accordion>
  );
};

export default MisconfigurationItem;
