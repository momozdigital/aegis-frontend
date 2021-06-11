import moment from 'moment'


export const prepareRecords = ( records = [] ) => {

    
    return records.map(
        (e) => ({
            ...e,
            end: moment( e.end ).toDate(),
            start: moment( e.start ).toDate(),
        })
    );

}