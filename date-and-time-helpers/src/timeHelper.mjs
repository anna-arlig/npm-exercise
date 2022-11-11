import dayjs from 'dayjs'
  import 'dayjs/locale/en-gb.js'
  dayjs.locale('en-gb') // en-gb starts week on monday, en does not
  const yyyymmdd = 'YYYY-MM-DD' // useful for simple .format(yyyymmdd)

const timeHelper = ({startDate, endDate}) => {

	let daysOfMonth = dayjs().daysInMonth(endDate)

	if(dayjs(startDate).format('M') === dayjs(endDate).format('M')){
		if(dayjs(startDate).format('D') === '1' && +dayjs(endDate).format('D') - 1  === daysOfMonth){
			return dayjs(startDate).format('MMMM')
		}
		return "No valid period"
	}
}

console.log(timeHelper({startDate: '2001-01-01', endDate: '2001-01-29'}))

