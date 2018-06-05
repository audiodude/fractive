window.HideHistory = function()
{
	Core.ShowHistory(false);
}

window.FunctionLink = function()
{
	alert("It might look like this, if your function was programmed to raise a browser alert (as this one was). Other functions could do complex logic to choose different sections to go to based on things like player state (do you have a certain item in your inventory?) or even a random roll of the dice!");
}

window.VariableLink = function()
{
	alert("You'll actually get a compiler error, because it doesn't make sense to link to a variable. In this case, I've linked to a function instead; specifically, one that shows you this alert.");
}

window.InlineFunction = function()
{
	return "This paragraph is some inline text that comes from a function call! In this case, I put a \
function macro in my story text, then had the function return the text I wanted to display. In a real \
game, you could have the function do some kind of game logic that decides what to display; for instance, \
you could have it check if the player has a particular inventory item, and say one thing if they do \
and something different if they don't.";
}

window.InlineVariable = "\"Hello, world!\"";

window.RaiseAlert = function()
{
	alert("fractive is super cool!");
}

window.InlineExpansionFunction = function()
{
	return "function (functions should return the string that will replace the link)";
}

window.InlineExpansionVariable = "variable (a string which will replace the link)";
