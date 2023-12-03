import React from 'react';
import {Button} from "antd";
import "./landing.scss";

class HomeView extends React.Component {

    render() {
        return (
            <div className="container" id="home">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 entry">
                        <div>
                            <h1>Welcome to the Table View</h1>
                            <p>
                                This table displays important information in a structured format. You can perform various actions
                                such as editing, deleting, and bulk deleting rows. Here are some tips to get started:
                            </p>
                            <ul>
                                <li>
                                    To edit a row, click the "Edit" button in the Actions column. Make your changes and click "Save."
                                </li>
                                <li>
                                    To delete a single row, click the "Delete" button in the Actions column.
                                </li>
                                <li>
                                    To bulk delete multiple rows, select the rows using the checkboxes and click "Bulk Delete."
                                </li>
                            </ul>
                            <p>
                                Explore the functionality and feel free to interact with the table to manage your data efficiently.
                            </p>
                        </div>
                        <Button href={"/table"} className="btn btn-sm stylebutton">
                            Lets Get Started
                        </Button>
                    </div>

                    {/*<div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 entryImg">*/}
                    {/*    <img*/}
                    {/*        className="title-image"*/}
                    {/*        id="robot"*/}
                    {/*        src={robotImage}*/}
                    {/*        alt="robot"*/}
                    {/*        style={{width: "200px", height: "200px"}}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

}

export default  HomeView;