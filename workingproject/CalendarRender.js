function CalendarRender(ArrayOfCalender, co) {
    var renderThis = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;';
    for (i = 0; i < ArrayOfCalender.ID.length; i++) { 
        renderThis += 'src='+ ArrayOfCalender.ID[i] + '%40group.calendar.google.com&amp;color=%' + ArrayOfCalenderID.color[i] + '&amp;'
    }

    renderThis += 'ctz=America%2FLos_Angeles" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
    return renderThis;
}

module.exports = {CalendarRender}