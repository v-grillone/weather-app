import { format, add } from 'date-fns';

function sevenDays() {
  for (let i = 1; i < 8; i += 1) {
    const day = add(new Date(), { days: i });
    const daysHeaders = document.querySelectorAll('.day');
    daysHeaders[i - 1].innerText = format(day, 'iii');
  }
}

export default sevenDays;
