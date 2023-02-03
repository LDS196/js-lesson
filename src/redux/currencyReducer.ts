import {
    ACTIONS_TYPE,
    ChangeAction, ChangeActionAC,
    ChangeCurrencyFieldAC,
    ChangeCurrencyFieldType, ChangeCurrentCurrencyAC, ChangeCurrentCurrencyType,
    CurrencyReducersTypes
} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {

    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {
                ...state,
                amountOfBYN: action.amountOfBYN,
                amountOfCurrency: action.amountOfCurrency
            }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION :
            return {
                ...state,
                isBuying: action.isBuying
            }
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                currentCurrency: action.currentCurrency
            }
        default:
            return state;
    }
};

// export const setCurrencyAmount = (amountOfBYN: string, amountOfCurrency: string) => {
//     return (dispatch: (a: ChangeCurrencyFieldType) => void) => {
//         dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency))
//     }
// }
// export const setAction = (isBuying: boolean) => {
//     return (dispatch: (a: ChangeAction) => void) => {
//         dispatch(ChangeActionAC(isBuying));
//     }
// }
// export const changeCurrency = (currency: string) => {
//
//     return (dispatch: (a: ChangeCurrentCurrencyType) => void) => {
//         dispatch(ChangeCurrentCurrencyAC(currency))
//     }
// }