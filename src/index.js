

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}
importAll(require.context('./styles', true, /\.(css|scss)$/));
importAll(require.context('./pug', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/));
import $ from "jquery";
$('.block').html('jQuery is working');

