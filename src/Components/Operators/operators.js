import React from 'react'
import { Button, Box, makeStyles, Tooltip } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/actions';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
import CloseIcon from '@material-ui/icons/Close'
import { FiPercent } from "react-icons/fi";
import { GiVacuumCleaner } from "react-icons/gi";
import { TiEquals } from "react-icons/ti";

const useStyles = makeStyles({
    box: {
        top: 0,
        background: "orange",
        width: '100%',
        transitionDelay: "0.5s",
        transition: "2s",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: "row",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
    },
    nestedBox: {
        padding: "1%",
    }
});

const Numbers = (props) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.box} >
                <Box
                    className={classes.nestedBox}
                >
                    <Tooltip title="Add" aria-label="add">
                        <Button size="large" onClick={() => props.onSetOperator('+')} variant="contained" color="primary" disabled={props.flg}>
                            <AddIcon />
                        </Button>
                    </Tooltip>
                </Box>
                <Box
                    className={classes.nestedBox}
                >
                    <Tooltip title="Subtract" aria-label="add">
                        <Button size="large" onClick={() => props.onSetOperator('-')} variant="contained" color="primary" disabled={props.flg}>
                            <RemoveIcon />
                        </Button>
                    </Tooltip>

                </Box>
                <Box
                    className={classes.nestedBox}
                >
                    <Tooltip title="Multiplication" aria-label="add">
                        <Button size="large" onClick={() => props.onSetOperator('*')} variant="contained" color="primary" disabled={props.flg}>
                            <CloseIcon />
                        </Button>
                    </Tooltip>
                </Box>
                <Box
                    className={classes.nestedBox}
                >
                    <Tooltip title="Division" aria-label="add">
                        <Button size="large" onClick={() => props.onSetOperator('/')} variant="contained" color="primary" disabled={props.flg}>
                            <FiPercent size={24} />
                        </Button>
                    </Tooltip>
                </Box>
                <Box
                    className={classes.nestedBox}
                >
                    <Tooltip title="Clear" aria-label="add">
                        <Button size="large" onClick={props.onSetCleanOperator} variant="contained" color="default">
                            <GiVacuumCleaner size={24} />
                        </Button>
                    </Tooltip>
                </Box>
                <Box
                    style={{ width: '95%' }}
                    className={classes.nestedBox}
                >
                    <Tooltip title="Equal" aria-label="add">
                        <Button size="large" style={{ width: '50%', margin: "0 auto" }} onClick={props.onSetEqualOperator} variant="contained" color="secondary">
                            <TiEquals size={24} />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCleanOperator: () => dispatch({ type: actionTypes.CLEAN }),
        onSetOperator: (operator) => dispatch({ type: actionTypes.OPERATOR, operator: operator }),
        onSetEqualOperator: () => dispatch({ type: actionTypes.EQUAL })
    }
}

const mapStateToProps = state => {
    return {
        opr: state.operator,
        flg: state.flag
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);