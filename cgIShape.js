//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube(subdivisions) {
    // Each face is 1x1, and we want subdivisions+1 segments along an edge.
    const segments = subdivisions + 1; 
    const squareWidth = 1 / segments;  // Each square’s width
    const half = 0.5;                // Face spans from -0.5 to 0.5
  
    // createFace builds one face using a grid.
    // normal: the axis that is fixed (e.g., "z" for front/back)
    // uAxis, vAxis: the two axes that define the face's plane
    // offset: the fixed coordinate value for the normal axis (±half)
    // flip: if true, reverse the winding order for proper outward normals.
    function createFace(normal, uAxis, vAxis, offset, flip) {
      for (let i = 0; i < segments; i++) {
        for (let j = 0; j < segments; j++) {
          // Compute the four corners of the current square.
          let x1 = -half + i * squareWidth;
          let y1 = -half + j * squareWidth;
          let x2 = x1 + squareWidth;
          let y2 = y1 + squareWidth;
  
          // Create points in 3D.
          // Using computed property names, we map our 2D grid (x, y) into the proper axes.
          let p1 = { [uAxis]: x1, [vAxis]: y1, [normal]: offset };
          let p2 = { [uAxis]: x2, [vAxis]: y1, [normal]: offset };
          let p3 = { [uAxis]: x1, [vAxis]: y2, [normal]: offset };
          let p4 = { [uAxis]: x2, [vAxis]: y2, [normal]: offset };
  
          // For each square, add two triangles.
          // If flip is true, swap the vertex order to reverse the winding.
          if (flip) {
            addTriangle(
              p1[uAxis], p1[vAxis], p1[normal],
              p3[uAxis], p3[vAxis], p3[normal],
              p2[uAxis], p2[vAxis], p2[normal]
            );
            addTriangle(
              p2[uAxis], p2[vAxis], p2[normal],
              p3[uAxis], p3[vAxis], p3[normal],
              p4[uAxis], p4[vAxis], p4[normal]
            );
          } else {
            addTriangle(
              p1[uAxis], p1[vAxis], p1[normal],
              p2[uAxis], p2[vAxis], p2[normal],
              p3[uAxis], p3[vAxis], p3[normal]
            );
            addTriangle(
              p2[uAxis], p2[vAxis], p2[normal],
              p4[uAxis], p4[vAxis], p4[normal],
              p3[uAxis], p3[vAxis], p3[normal]
            );
          }
        }
      }
    }
  
    // Create each face.
    // For a cube with outward facing normals following the right-hand rule,
    // the front, right, and top faces use the default (non-flipped) winding,
    // while the back, left, and bottom faces need to be flipped.
    createFace("z", "x", "y", half, false);   // Front face (+Z)
    createFace("z", "x", "y", -half, true);     // Back face (-Z)
    createFace("x", "z", "y", half, false);     // Right face (+X)
    createFace("x", "z", "y", -half, true);       // Left face (-X)
    createFace("y", "x", "z", half, false);     // Top face (+Y)
    createFace("y", "x", "z", -half, true);       // Bottom face (-Y)
  }
  



//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    // fill in your code here.
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coor + paddingdinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

