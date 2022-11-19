export function isNotEmptyString<T>(value: T):boolean {
    return isDefined(value) && typeof (value) === "string" && value !== '';
}

export function isDefined<T>(value: T):boolean {
    return value !== undefined && value !== null;
}
export class commonDropdownVM {
    label: string = "";
    value: number | string = "";
}
export const dropDownItems: Array<commonDropdownVM> = [
    { label: "Sample 1", value: 1 },
    { label: "Sample 2", value: 2 },
    { label: "Sample 3", value: 3 },
    { label: "Sample 4", value: 4 },
    { label: "Sample 5", value: 5 },
    { label: "Sample 6", value: 6 },
    { label: "Sample 7", value: 7 },
];
export class tabSetVM {
    label: string = "";
    seqNum: number = 0;
    command: any;
}
export namespace Products {
    export interface IItemQuantity {
        productName?: string;
        countryName: string;
        countryCode: string;
        quantity: string;
        image: string;
        unit: string;
        tags?:string[]
    }
    export interface IStepsData {
        headField: string;
        headInventory: string;
        selectedRowData?: IRowStepData;
        rowData: Array<IRowStepData>;
        unit:string;
        image:string;
    }
    export interface IRowStepData {
        code?:string;
        isChecked: boolean;
        field: string;
        inventory: string;
        unit:string;
        image?:string;
        _id?:string;
    }
    export interface IStepsReuiredData {
        id: number;
        header: string;
        isCompleted: boolean;
        isOpened: boolean;
    }
    export enum stepsItemEnum {
        step1 = 1,
        step2 = 2,
        step3 = 3
    }
    export const items: Array<{ label: string }> = [
        { label: "All Products" },
        { label: "Fruits" },
        { label: "Cluster" },
    ]
    export const stepsReuiredData: Array<IStepsReuiredData> = [
        {
            id: stepsItemEnum.step1,
            header: "1. Choose the State you want to order from",
            isCompleted: false,
            isOpened: false
        },
        {
            id: stepsItemEnum.step2,
            header: "2. Choose the Cluster you want to order from",
            isCompleted: false,
            isOpened: false
        },
        {
            id: stepsItemEnum.step3,
            header: "3. Choose the Variety",
            isCompleted: false,
            isOpened: false
        },
    ];
    export const step1Data: IStepsData = {
        headField: "India",
        headInventory: "2000Kg",
        unit:'Kg',
        image:'',
        rowData: [
            {
              code:'',
                field: "Himachal Pradesh",
                inventory: "1000Kg",
                isChecked: false,
                image:'',
                unit:'Kg'
            }, {
                code:'',
                field: "Karnataka Pradesh",
                inventory: "1000Kg",
                isChecked: false,
                image:'',
                unit:'Kg'

            }
        ]
    };
    export const step2Data: IStepsData = {
        headField: "Gujarat",
        headInventory: "1000Kg",
        unit:'Kg',
        image:'',
        rowData: [
            {
              code:'',
                field: "Gujarat",
                inventory: "1000Kg",
                isChecked: false,
                image:'',
                unit:'Kg'
            }, {
              code:'',
                field: "Kolkatta",
                inventory: "1000Kg",
                isChecked: false,
                image:'',
                unit:'Kg'
            }
        ]
    };
    export const step3Data: IStepsData = {
        headField: "Gujarat",
        headInventory: "1230Kg",
        unit:'Kg',
        image:'',
        rowData: [
            {
              code:'',
                field: "Manali",
                inventory: "1000Kg",
                isChecked: false,
                image:'',
                unit:'Kg'
            }, {
              code:'',
                field: "Banglor",
                inventory: "1000Kg",
                isChecked: false,
                image:'',
                unit:'Kg'
            }
        ]
    };
}
export namespace SupplierDirectory {
    export interface IDIrectoryDetails {
        title: string;
        stars: number;
        fullfillments: number;
        subTitle: string;
        state: string;
        city: string;
        country: string;
        detailedText1: string;
        detailedText2: string;
    }
    export const supplierDirectoryData: Array<IDIrectoryDetails> = [
        {
            title: "Pabhojan Client",
            subTitle: "Apple Producer and Trader",
            stars: 3,
            fullfillments: 4,
            city: "Nasik",
            state: "Maharashtra",
            country: "India",
            detailedText1: `Pabhojan Client is the trademark of a family-owned business with over 10 years history. We produce and export a wide
                range of fresh fruits applying the traditional and modern technologies, focusing on the international quality standards
                and highest level of customer support.`,
            detailedText2: "Our export is in the country’s of Asia and America."
        },
        {
            title: "Pabhojan Client",
            subTitle: "Apple Producer and Trader",
            stars: 3,
            fullfillments: 4,
            city: "Nasik",
            state: "Maharashtra",
            country: "India",
            detailedText1: `Pabhojan Client is the trademark of a family-owned business with over 10 years history. We produce and export a wide
                range of fresh fruits applying the traditional and modern technologies, focusing on the international quality standards
                and highest level of customer support.`,
            detailedText2: "Our export is in the country’s of Asia and America."
        },
        {
            title: "Pabhojan Client",
            subTitle: "Apple Producer and Trader",
            stars: 3,
            fullfillments: 4,
            city: "Nasik",
            state: "Maharashtra",
            country: "India",
            detailedText1: `Pabhojan Client is the trademark of a family-owned business with over 10 years history. We produce and export a wide
                range of fresh fruits applying the traditional and modern technologies, focusing on the international quality standards
                and highest level of customer support.`,
            detailedText2: "Our export is in the country’s of Asia and America."
        },
    ]
}
export namespace ConfirmOrder {
    export interface IConfirmOrderFilters {
        CheckBoxes: Array<ICheckBox>;
        ProductQuantityRadios: IProductQuantity;
        BagsDDDetails: Array<commonDropdownVM>;
        CurrencyDDDetails: Array<commonDropdownVM>;
    }
    export interface ICheckBox {
        label: string;
        isChecked: boolean;
    }
    export interface IProductQuantity {
        Options: Array<commonDropdownVM>;
        SelectedOptions?: commonDropdownVM | null;
    }
    export interface IStepsData {
        headField: string;
        headInventory: string;
        selectedRowData?: IRowStepData;
        rowData: Array<IRowStepData>;
    }
    export interface IRowStepData {
        isChecked: boolean;
        grade: string;
        bows: number;
        boxWeight: string;
        pricePerBox: number;
        inputQuantity: number;
        palletCount: number;
        totalWeight: number;
        totalPrice: number;
    }
    export const confirmOrderFilters: IConfirmOrderFilters = {
        CheckBoxes: [
            { label: "Aims", isChecked: false },
            { label: "Aims1", isChecked: false },
            { label: "Aims2", isChecked: false },
            { label: "Aims3", isChecked: false },
        ],
        ProductQuantityRadios: {
            Options: [
                { label: "Aims", value: 1 },
                { label: "Aims1", value: 2 },
                { label: "Aims2", value: 3 },
                { label: "Aims3", value: 4 },
            ],
            SelectedOptions: null
        },
        BagsDDDetails: [
            { label: "Aims", value: 1 },
            { label: "Aims1", value: 2 },
            { label: "Aims2", value: 3 },
            { label: "Aims3", value: 4 },
        ],
        CurrencyDDDetails: [
            { label: "Aims", value: 1 },
            { label: "Aims1", value: 2 },
            { label: "Aims2", value: 3 },
            { label: "Aims3", value: 4 },
        ]
    }
    export const stepsReuiredData: Array<Products.IStepsReuiredData> = [
        {
            id: Products.stepsItemEnum.step1,
            header: "1. Choose the Variety along with the suppliers you want to order from",
            isCompleted: false,
            isOpened: false
        },
        {
            id: Products.stepsItemEnum.step2,
            header: "2. Preview Your Order",
            isCompleted: false,
            isOpened: false
        }
    ];
    export const step1Data: IStepsData = {
        headField: "India",
        headInventory: "2000Kg",
        rowData: [
            {
                grade: "Good",
                bows: 250,
                boxWeight: "20Kg",
                pricePerBox: 200,
                inputQuantity: 0,
                palletCount: 1,
                totalWeight: 1000,
                totalPrice: 65000,
                isChecked: false
            },
            {
                grade: "Good",
                bows: 250,
                boxWeight: "20Kg",
                pricePerBox: 200,
                inputQuantity: 0,
                palletCount: 1,
                totalWeight: 1000,
                totalPrice: 65000,
                isChecked: false
            }
        ]
    };
    export const step2Data: IStepsData = {
        headField: "India",
        headInventory: "2000Kg",
        rowData: [
            {
                grade: "Good",
                bows: 250,
                boxWeight: "20Kg",
                pricePerBox: 200,
                inputQuantity: 0,
                palletCount: 1,
                totalWeight: 1000,
                totalPrice: 65000,
                isChecked: false
            },
            {
                grade: "Good",
                bows: 250,
                boxWeight: "20Kg",
                pricePerBox: 200,
                inputQuantity: 0,
                palletCount: 1,
                totalWeight: 1000,
                totalPrice: 65000,
                isChecked: false
            }
        ]
    };
    export enum ConfirmOrderTabEnum {
        Order = 1,
        Forecast = 2
    }
}
export namespace Forecast {
    export interface IStepsData {
        headField: string;
        headInventory: string;
        selectedRowData?: IRowStepData;
        rowData: Array<IRowStepData>;
    };
    export interface IRowStepData {
        grade: string;
        forecast: number;
        deliveryFrequency: number;
        inputQuantity: number;
        fromDate: string | Date;
        toDate: string | Date;
    };
    export const stepsReuiredData: Array<Products.IStepsReuiredData> = [
        {
            id: Products.stepsItemEnum.step1,
            header: "1. Choose the Grade along with the Suppliers you want to Forecast from",
            isCompleted: false,
            isOpened: false
        },
        {
            id: Products.stepsItemEnum.step2,
            header: "2. Preview Your Forecast",
            isCompleted: false,
            isOpened: false
        }
    ];
    export const step1Data: IStepsData = {
        headField: "India",
        headInventory: "2000Kg",
        rowData: [
            {
                grade: "Good",
                forecast: 12,
                deliveryFrequency: 250,
                inputQuantity: 12,
                fromDate: "",
                toDate: ""
            },
            {
                grade: "Good",
                forecast: 12,
                deliveryFrequency: 250,
                inputQuantity: 12,
                fromDate: "",
                toDate: ""
            }
        ]
    };
    export const step2Data: IStepsData = {
        headField: "India",
        headInventory: "2000Kg",
        rowData: [
            {
                grade: "Good",
                forecast: 12,
                deliveryFrequency: 250,
                inputQuantity: 12,
                fromDate: "",
                toDate: ""
            },
            {
                grade: "Good",
                forecast: 12,
                deliveryFrequency: 250,
                inputQuantity: 12,
                fromDate: "",
                toDate: ""
            }
        ]
    };
}
