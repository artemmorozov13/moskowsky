import cn from "classnames";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import s from "./acordion.module.scss";

const Acordion = (props) => {
    const {
        className,
        title,
        children
    } = props

    return(
        <Accordion
            className={cn(s.acordion, className)}
            classes={{
                root: s.root
            }}
        >
            <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className={s.icon} />}
                aria-controls="panel1a-content"
            >
            <h3>{title}</h3>
            </AccordionSummary>
            <AccordionDetails className={s.content}>
                <p>{children}</p>
            </AccordionDetails>
        </Accordion>
        
    )
}

export default Acordion