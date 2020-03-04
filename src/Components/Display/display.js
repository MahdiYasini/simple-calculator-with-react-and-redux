import React from 'react'
import { Paper, makeStyles, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    mainDisplay: {
        display: "flex",
        justifyContent: "row",
        flexWrap: 'wrap',
        margin: "3% auto",
        width: "40%",
        height: "40%",
        background: "grey",
        borderRadius: 40,
        padding: "2%"
    },
    info: {
        width: "100%",
        display: 'flex',

    }
});

const Display = (props) => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.mainDisplay} variant="outlined">
                <Box className={classes.info}>
                    <Typography color="primary" variant="h5" component="h2" gutterBottom>
                        Main Variable: &nbsp;
                </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                        {props.mainVariable}
                    </Typography>
                </Box>
                <Box className={classes.info}>
                    <Typography color="primary" variant="h5" component="h2" gutterBottom>
                        Operator:&nbsp;
                </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                        {props.operator}
                    </Typography>
                </Box>
                <Box className={classes.info}>
                    <Typography color="primary" variant="h5" component="h2" gutterBottom>
                        Variable:&nbsp;
                </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                        {props.variable}
                    </Typography>
                </Box>
                <Box className={classes.info}>
                    <Typography color="primary" variant="h5" component="h2" gutterBottom>
                        Result:&nbsp;
                </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                        {props.result}
                    </Typography>
                </Box>

            </Paper>
        </>
    )
};

const mapStateToProps = state => {
    return {
        mainVariable: state.mainVariable,
        variable: state.variable,
        result: state.result,
        operator: state.operator
    }
}

export default connect(mapStateToProps)(Display);