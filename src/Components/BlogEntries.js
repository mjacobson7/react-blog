import React, { Component } from 'react';

export class BlogEntries extends Component {
    render() {
        return (
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                <h2>Blog Entries</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Date Posted</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11/01/2016</td>
                                <td>5 Excema Products</td>
                                <td>Max Jacobson</td>
                                {/* <button>Edit</button> */}
                            </tr>
                            <tr>
                                <td>12/01/2016</td>
                                <td>Treating Severe Excema</td>
                                <td>Corina Jacobson</td>
                                {/* <button>Edit</button> */}
                            </tr>
                            <tr>
                                <td>01/01/2017</td>
                                <td>Caring for a baby with excema</td>
                                <td>Corina Jacobson</td>
                                {/* <button>Edit</button> */}
                            </tr>
                            <tr>
                                <td>02/01/2017</td>
                                <td>Excema, Asthma, and Allergies</td>
                                <td>Max Jacobson</td>
                                {/* <button>Edit</button> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}