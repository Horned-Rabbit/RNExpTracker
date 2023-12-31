import { StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../constans/styles'

import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses}
        periodName={expensesPeriod}
      />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})
