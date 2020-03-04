import React from 'react'
import { Button, Box, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/actions';

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

const useStyles = makeStyles({
    box: {
        '&:hover': {

            background: 'salmon',
        },
        background: "#00cdac",
        width: '22%',
        margin: '0 auto',
        transitionDelay: "0.5s",
        transition: "2s",

        border: "1px solid grey",
        borderRadius: 40,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap"
    },
    groupNumber: {
        borderBottom: "1px solid grey",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    }
});

const Numbers = (props) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.box} >
                {props.children}
                {numbers.map(groupNumber => (
                    <Box
                        className={classes.groupNumber}
                        p={1}>
                        {groupNumber.map(number => (
                            <Box p={1} key={number} align="center">
                                <Button size="large" onClick={() => props.onAddNumber(number)} variant="contained" color="primary">{number}</Button>
                            </Box>
                        ))
                        }
                    </Box>
                ))}
            </Box>
        </>
    )
};

const mapDispatchToProps = dispatch => {
    console.log('dispatch')
    return {
        onAddNumber: (number) => dispatch({ type: actionTypes.ADD_NUMBER, value: number })
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        mainVariable: state.mainVariable,
        variable: state.variable
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);