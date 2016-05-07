autowatch = 1;
inlets = 1;
outlets = 1;



function undo()
{
	var api = new LiveAPI("live_set");
	api.call("undo");
}

function redo()
{
	var api = new LiveAPI("live_set");
	api.call("redo");
}


