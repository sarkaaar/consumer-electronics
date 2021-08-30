import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import axios from "axios";
import SiteHeader from "../../components/SiteHeader";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: 150,
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const shipping = JSON.parse(localStorage.getItem("shipping"));
  const payment = JSON.parse(localStorage.getItem("payment"));

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  function showData() {
    axios
      .post(
        "https://ce-strapi-server.herokuapp.com/checkouts",
        { ...shipping, ...payment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setActiveStep(activeStep + 1);

    // axios.post("http://localhost:1337/orders",{})
  }

  function orderPlace() {
    axios
      .post("http://localhost:1337/orders", {
        user_credentials: { email: JSON.parse(user).email },
        payment_details: { ...shipping, ...payment },
        products: { value },
      })
      .then(function (response) {
        console.log(response);
        console.log("all done")
        localStorage.setItem("_id",response.data._id)
      })
      .catch(function (error) {
        console.log(error);
      });

    // user_credentials
    // console.log(JSON.parse(user))

    console.log(value);

    // user_credentials
    // payment_details
    // products

    // console.log(JSON.parse(user).email)
  }

  return (
    <div>
      <SiteHeader />
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is {localStorage.getItem("_id")}. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}

                    {activeStep === steps.length - 1 ? (
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={showData}
                          className={classes.button}
                        >
                          Place order
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={orderPlace}
                          className={classes.button}
                        >
                          Test{" "}
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    </div>
  );
}
