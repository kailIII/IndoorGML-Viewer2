/**
 * @author mrdoob / http://mrdoob.com/
 */

define([
	"./SidebarScene",
	"./SidebarProperties",
	"./SidebarProject"
], function(
	SidebarScene,
	SidebarProperties,
	SidebarProject
) {
  'use strict';

  var Sidebar = function(editor) {

    var container = new UI.Panel();
    container.setId('sidebar');

    //

    var sceneTab = new UI.Text('SCENE').onClick(onClick);
    var projectTab = new UI.Text('PROJECT').onClick(onClick);
    // var settingsTab = new UI.Text('SETTINGS').onClick(onClick);

    var tabs = new UI.Div();
    tabs.setId('tabs');
    //tabs.add( sceneTab, projectTab, settingsTab );
    tabs.add(sceneTab);
    container.add(tabs);

    function onClick(event) {

      select(event.target.textContent);

    }



    var scene = new UI.Span().add(
			// new SidebarScene(editor),
			new SidebarProperties(editor)
      // new Sidebar.Animation(editor) //,
      //new Sidebar.Script( editor )
    );
    container.add(scene);

    var project = new UI.Span().add(
      new SidebarProject(editor)
    );
    // container.add( project );

    // var settings = new UI.Span().add(
    //   new Sidebar.Settings(editor),
    //   new Sidebar.History(editor)
    // );
    //container.add( settings );

    //

    function select(section) {

      sceneTab.setClass('');
      // projectTab.setClass('');
      // settingsTab.setClass('');

      scene.setDisplay('none');
      // project.setDisplay('none');
      // settings.setDisplay('none');

      switch (section) {
        case 'SCENE':
          sceneTab.setClass('selected');
          scene.setDisplay('');
          break;
        // case 'PROJECT':
        //   projectTab.setClass('selected');
        //   project.setDisplay('');
        //   break;
        // case 'SETTINGS':
        //   settingsTab.setClass('selected');
        //   settings.setDisplay('');
        //   break;
      }

    }
    select('SCENE');
    return container;
  };

  return Sidebar;
});
