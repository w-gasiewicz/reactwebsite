import React, { Component, Number } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import LoadingAnimation from './LoadingAnimation.js';
import HamburgerMenu from './HamburgerMenu.js';
import '../styles/ExchangeRates.css';
import '../styles/TextStyles.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    //    const { items, requestSort, sortConfig } = useSortableData(props.products);
    if(props.products.rates == null)
    return (
        <div>
            <HamburgerMenu />
            < LoadingAnimation />
        </div>
    );

    const arr = Object.keys(props.products.rates).map((key) => [key, props.products.rates[key]]);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table className='table table-dark table-hover' aria-labelledby="tabelLabel">
            <caption className='text'>Tabela kursów walut na wybrany dzień</caption>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                        // onClick={() => requestSort('date')}
                        // className={getClassNamesFor('date')}
                        >
                            Data
            </button>
                    </th>
                    <th>
                        <button
                            type="button"
                        // onClick={() => requestSort('code')}
                        // className={getClassNamesFor('code')}
                        >
                            Kod
            </button>
                    </th>
                    {/* <th>
                        <button
                            type="button"
                            // onClick={() => requestSort('name')}
                            // className={getClassNamesFor('name')}
                        >
                            Nazwa
            </button>
                    </th> */}
                    <th>
                        <button
                            type="button"
                        // onClick={() => requestSort('value')}
                        // className={getClassNamesFor('value')}
                        >
                            Wartość
            </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item) => (
                    <tr>
                        <td><Moment format="YYYY-MM-DD">{item.date}</Moment></td>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        {/* <td>{item.name}</td>
                        <td>{item.value}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

var date = new Date();
export class ExchangeRates extends Component {

    constructor(props) {
        super(props);
        //this.state = props.state;        
        this.state = { loading: true, date: moment(date).format('YYYY-MM-DD'), precision: 2, values: [] };
    }

    componentDidMount() {
        this.populateData();
    }
    componentWillReceiveProps(props) {
        if (this.state.date != props.state.date || this.state.precision != props.state.precision) {
            this.state = props.state;
        }
        else {
            this.setState({ loading: true, date: moment(date).format('YYYY-MM-DD'), precision: 2 });
        }
    }
    render() {
        let contents = this.state.loading

        if (contents)
            return (
                <div>
                    <HamburgerMenu />
                    < LoadingAnimation />
                </div>
            );

        if (this.state.values == [])
            this.populateData();

        return (
            <div>
                <HamburgerMenu />
                <ProductTable
                    products={this.state.values}
                />
            </div>
        );
    }
    async populateData() {
        //const response = await fetch('https://api.exchangeratesapi.io/' + this.state.date + '?base=PLN');
        const response = await fetch('https://api.ratesapi.io/api/' + this.state.date + '?base=PLN');
        const data = await response.json();
        this.setState({ values: data, loading: false });
    }
}
export default ExchangeRates;
